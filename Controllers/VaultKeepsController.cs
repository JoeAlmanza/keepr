using System;
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
    
    public class VaultKeepsController : ControllerBase
    {
        private readonly VaultKeepsService _vks;

        private readonly VaultsService _vs;

    public VaultKeepsController(VaultKeepsService vks, VaultsService vs)
    {
      _vks = vks;
      _vs = vs;
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<VaultKeep>> Create([FromBody] VaultKeep newVK)
    {
        try
        {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            newVK.CreatorId = userInfo.Id;
            newVK.Creator = userInfo;
            var data = _vs.GetById(userInfo.Id, newVK.VaultId);
            return Ok(_vks.Create(newVK, data));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpDelete("{id}")]
    [Authorize]
    public async Task<ActionResult<VaultKeep>> Delete(int id)
    {
        try
        {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            return Ok(_vks.Delete(id, userInfo.Id));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
  }
}