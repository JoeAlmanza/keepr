using System;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class VaultKeepsRepository
  {
      private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal VaultKeep GetById(int id)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE id = @id;";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new{id});
    }

    internal int Create(VaultKeep newVK)
    {
      string sql = @"
      INSERT INTO vaultkeeps
      (creatorId, vaultId, keepId)
      VALUES
      (@CreatorId, @VaultId, @KeepId);
      SELECT LAST_INSERT_ID();";
      return _db.ExecuteScalar<int>(sql, newVK);
      
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id = @id;";
      _db.Execute(sql, new {id});
    }
  }
}