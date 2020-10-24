using System;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class VaultKeepsService
  {
      private readonly VaultKeepsRepository _repo;

    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }

    internal VaultKeep GetById(int id)
    {
      var data = _repo.GetById(id);
      if(data == null)
      {
          throw new Exception("Invalid Id");
      }
      return data;
    }

    internal VaultKeep Create(VaultKeep newVK)
    {
      newVK.Id = _repo.Create(newVK);
      return newVK;
    }

    internal object Delete(int id, string userId)
    {
      var data = GetById(id);
      if(data.CreatorId != userId)
      {
          throw new Exception("Invalid Edit Permissions");
      }
      _repo.Delete(id);
      return "Successfully Deleted";
    }
  }
}