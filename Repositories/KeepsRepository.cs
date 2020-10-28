using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class KeepsRepository
  {

    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Keep> GetAll()
    {
      string sql = @"
      SELECT 
      keep.*,
      prof.*
      FROM keeps keep
      JOIN profiles prof ON keep.creatorId = prof.id";
      return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) =>
      {
          keep.Creator = profile;
          return keep;
      }, splitOn: "id");

    }

    internal Keep GetById(int id)
    {
      string sql = @"
      SELECT 
      keep.*,
      prof.*
      FROM keeps keep
      JOIN profiles prof ON keep.creatorId = prof.id
      WHERE keep.id = @id";
      return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) =>
      {
          keep.Creator = profile;
          return keep;
      }, new {id}, splitOn: "id").FirstOrDefault();
    }

    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int id)
    {
      string sql = @"
      SELECT 
      k.*,
      vk.id AS VaultKeepId,
      prof.*
      FROM vaultkeeps vk
      JOIN keeps k ON vk.keepId = k.id
      JOIN profiles prof ON k.creatorId = prof.Id 
      WHERE vaultId = @id";
      return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(sql, (vaultKeep, profile) =>
      {
        vaultKeep.Creator = profile;
        return vaultKeep;
      }, new {id}, splitOn: "id");
    }

    internal Keep Create(Keep newKeep)
    {
      string sql = @"
      INSERT INTO keeps
      (creatorId, name, description, img, views, shares, keeps)
      VALUES
      (@CreatorId, @Name, @Description, @Img, @Views, @Shares, @Keeps);
      SELECT LAST_INSERT_ID();";
      newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
      return newKeep;
    }


    internal object Edit(Keep updated)
    {
      string sql = @"
      UPDATE keeps
      SET 
      name = @Name,
      description = @Description,
      img = @Img,
      views = @Views,
      shares = @Shares,
      keeps = @Keeps
      WHERE id = @id";
      _db.Execute(sql, updated);
      return updated;
    }

    internal IEnumerable<Keep> GetByCreatorId(string id)
    {
      string sql = @"
      SELECT 
      keep.*,
      prof.*
      FROM keeps keep
      JOIN profiles prof ON keep.creatorId = prof.Id
      WHERE keep.creatorId = @Id";
      return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) =>
      {
          keep.Creator = profile;
          return keep;
      }, new {id}, splitOn: "id");
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM keeps WHERE id = @id";
      _db.Execute(sql, new{id});
    }
  }
}