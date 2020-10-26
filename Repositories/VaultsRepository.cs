using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class VaultsRepository
  {
      private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }


    internal Vault GetById(int id)
    {
      string sql = @"
      SELECT
      vlt.*,
      prof.*
      FROM vaults vlt
      JOIN profiles prof ON vlt.creatorId = prof.id
      WHERE vlt.id = @id";
      return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) =>
      {
          vault.Creator = profile;
          return vault;
      }, new{id}, splitOn: "id").FirstOrDefault();
    }

    internal Vault Create(Vault newVault)
    {
      string sql = @"
      INSERT INTO vaults
      (creatorId, name, description, isPrivate)
      VALUES
      (@CreatorId, @Name, @Description, @isPrivate);
      SELECT LAST_INSERT_ID();";
      newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
      return newVault;
    }

    internal IEnumerable<Vault> GetByCreatorId(string id)
    {
      string sql = @"
      SELECT 
      vlt.*,
      prof.*
      FROM vaults vlt
      JOIN profiles prof ON vlt.creatorId = prof.Id
      WHERE vlt.creatorId = @id";
      return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) =>
      {
        vault.Creator = profile;
        return vault;
      }, new {id}, splitOn: "id");
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM vaults WHERE id = @id";
      _db.Execute(sql, new{id});
    }

  }
}