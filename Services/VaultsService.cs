using System;
using System.Collections.Generic;
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

    internal IEnumerable<Vault> GetAll()
    {
      return _repo.GetAll();
    }

    internal Vault GetById(int id)
    {
      var data = _repo.GetById(id);
      if(data == null)
      {
          throw new Exception("Invalid Id");
      }
      return data;
    }

    internal object Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }

    internal object Edit(Vault updated)
    {
      var data = _repo.GetById(updated.Id);
      if(data.CreatorId != updated.CreatorId)
      {
          throw new Exception("Invalid Edit Permissions");
      }
      updated.Name = updated.Name != null ? updated.Name : data.Name;
      updated.Description = updated.Description != null ? updated.Description : data.Description;

      return _repo.Edit(updated);
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