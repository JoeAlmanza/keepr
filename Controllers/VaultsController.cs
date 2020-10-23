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
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _vs;

    public VaultsController(VaultsService vs)
    {
      _vs = vs;
    }

    [HttpGet]
    public ActionResult<Vault> GetAll()
    {
        try
        {
            return Ok(_vs.GetAll());
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("{id}")]
    public ActionResult<Vault> GetById(int id)
    {
        try
        {
            return Ok(_vs.GetById(id));
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

    [HttpPut("{id}")]
    [Authorize]
    public async Task<ActionResult<Vault>> Edit([FromBody] Vault updated, int id)
    {
        try
        {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            updated.CreatorId = userInfo.Id;
            updated.Creator = userInfo;
            updated.Id = id;
            return Ok(_vs.Edit(updated)); 
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
  }
}