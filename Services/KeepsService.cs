using System;
using System.Collections.Generic;
using System.Linq;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class KeepsService
  {

    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }


    internal IEnumerable<Keep> GetAll()
    {
      return _repo.GetAll();
    }


    internal Keep GetById(int id)
    {
      var data = _repo.GetById(id);
      data.Views++;
      _repo.Edit(data);
      if(data == null)
      {
          throw new Exception("Invalid Id");
      }
      return data;
    }


    internal IEnumerable<VaultKeepViewModel> GetByVaultId(int id)
    {
      return _repo.GetKeepsByVaultId(id);
    }

    internal IEnumerable<Keep> GetKeepsByProfileId(string queryId, string userId)
    {
      return _repo.GetByCreatorId(queryId).ToList().FindAll(k=> k.CreatorId == userId); 
    }

    internal Keep Create(Keep newKeep)
    {
      return _repo.Create(newKeep);
    }


    internal object Edit(Keep updated)
    {
      var data = GetById(updated.Id);
      if(data == null)
      {
        throw new Exception("Invalid Keep ID");
      }
      if(data.CreatorId != updated.CreatorId)
      {
          throw new Exception("Invalid edit permissions");
      }
      updated.Name = updated.Name != null ? updated.Name : data.Name;
      updated.Description = updated.Description != null ? updated.Description : data.Description;
      updated.Img = updated.Img != null ? updated.Img : data.Img;

      return _repo.Edit(updated);
    }


    internal object Delete(int id, string userId)
    {
      var data = GetById(id);
      if(data == null)
      {
        throw new Exception("Invalid Keep ID");
      }
      if(data.CreatorId != userId)
      {
          throw new Exception("Invalid Edit Permissions");
      }
      _repo.Delete(id);
      return "Successfully Deleted";
    }


    

  }
}