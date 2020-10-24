using System;
using System.Collections.Generic;
using System.Linq;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class VaultsService
  {
      private readonly VaultsRepository _repo;

    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }


    internal Vault GetById(string userId, int id)
    {
      Vault data = _repo.GetById(id);
      if(data == null)
      {
          throw new Exception("Invalid Id");
      }
      if(data.CreatorId != userId && !data.IsPrivate)
      {
        throw new Exception("Unable to view private vaults");
      }
      return data;
    }


    internal object Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }


    internal object Delete(int id, string userId)
    {
      Vault data = _repo.GetById(id);
      if (data == null)
      {
        throw new Exception("Invalid Vault ID");
      }
      if(data.CreatorId != userId)
      {
          throw new Exception("Invalid Edit Permissions");
      }
      _repo.Delete(id);
      return "Successfully Deleted";
    }

    internal IEnumerable<Vault> GetVaultsByProfileId(string queryId, string userId)
    {
      return _repo.GetByCreatorId(queryId).ToList().FindAll(v => v.CreatorId == userId);
    }
  }
}