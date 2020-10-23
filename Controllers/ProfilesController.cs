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
  public class ProfilesController : ControllerBase
  {
    private readonly ProfilesService _ps;

    public ProfilesController(ProfilesService ps, KeepsService ks)
    {
      _ps = ps;
    }


    [HttpGet]
    [Authorize]
    public async Task<ActionResult<Profile>> Get()
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_ps.GetOrCreateProfile(userInfo));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    // [HttpGet("{id}/keeps")]
    // public async Task<ActionResult<IEnumerable<Keep>>> GetKeeps(string id)
    // {
    //   try
    //   {
    //       Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
    //       Profile queryProfile = _ps.GetProfileEmailById(id);
    //       return Ok(_ks.GetAllByCreatorEmail(queryProfile.Email, userInfo?.Email));
    //   }
    //   catch (Exception e)
    //   {
    //       return BadRequest(e.Message);
    //   }
    // }
  }
}