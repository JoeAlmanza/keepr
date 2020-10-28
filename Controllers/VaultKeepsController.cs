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

        private readonly KeepsService _ks;

    public VaultKeepsController(VaultKeepsService vks, VaultsService vs, KeepsService ks)
    {
      _vks = vks;
      _vs = vs;
      _ks = ks;
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
            var keepData = _ks.GetById(newVK.KeepId);
            keepData.Keeps++;
            _ks.Edit(keepData);
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