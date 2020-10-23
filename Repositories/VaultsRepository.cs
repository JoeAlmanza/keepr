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

    internal IEnumerable<Vault> GetAll()
    {
      string sql = @"
      SELECT
      vlt.*
      prof.*
      FROM vaults vlt
      JOIN profiles prof ON vlt.creatorId = prof.id";
      return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) =>
      {
          vault.Creator = profile;
          return vault;
      }, splitOn: "id");
    }

    internal Vault GetById(int id)
    {
      string sql = @"
      SELECT
      vlt.*
      prof.*
      FROM vaults vlt
      JOIN profiles prof ON vlt.creatorId = prof.id";
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
      (creatorId, name, description)
      VALUES
      (@CreatorId, @Name, @Description);
      SELECT LAST_INSERT_ID();";
      newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
      return newVault;
    }

    internal void Delete(int id)
    {
      throw new NotImplementedException();
    }

    internal object Edit(Vault updated)
    {
      throw new NotImplementedException();
    }
  }
}