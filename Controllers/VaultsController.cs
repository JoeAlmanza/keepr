using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keepr.Models;
using keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _vs;
        private readonly KeepsService _ks;

    public VaultsController(VaultsService vs, KeepsService ks)
    {
      _vs = vs;
      _ks = ks;
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Vault>> GetById(int id)
    {
        try
        {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            return Ok(_vs.GetById(userInfo?.Id, id));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    
    [HttpGet("{id}/keeps")]
    public ActionResult<IEnumerable<VaultKeepViewModel>> GetKeeps(int id)
    {
        try
        {
            return Ok(_ks.GetByVaultId(id));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<Vault>> Create([FromBody] Vault newVault)
    {
        try
        {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            newVault.CreatorId = userInfo.Id;
            newVault.Creator = userInfo;
            return Ok(_vs.Create(newVault));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    [HttpDelete("{id}")]
    [Authorize]
    public async Task<ActionResult<Vault>> Delete(int id)
    {
        try
        {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            return Ok(_vs.Delete(id, userInfo.Id));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    // [HttpPut("{id}")]
    // [Authorize]
    // public async Task<ActionResult<Vault>> Edit([FromBody] Vault updated, int id)
    // {
    //     try
    //     {
    //         Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
    //         updated.CreatorId = userInfo.Id;
    //         updated.Creator = userInfo;
    //         updated.Id = id;
    //         return Ok(_vs.Edit(updated)); 
    //     }
    //     catch (Exception e)
    //     {
    //         return BadRequest(e.Message);
    //     }
    // }
  }
}