using Microsoft.AspNetCore.Mvc;
using System;
using YourDocs.Models.Models.CommandModels;

namespace YourDocs.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpGet("GetMemberInfoAfterLogin")]
        public IActionResult GetMemberInfoAfterLogin()
        {
            return Ok("Seems Good");
        }

        [HttpPost("CheckMemberInfoForLogin")]
        public IActionResult CheckMemberInfoForLogin([FromBody] LoginCommandModel input)
        {
            try
            {
                var email = "sample.email@email.com";
                var password = "Password@321";
                LoginSuccessModel data = new LoginSuccessModel();
                if(input.EmailId == email && input.Password == password)
                {
                    data.LoginSuccess = true;
                    return Ok(data);
                }
                else
                {
                    return Ok(data);
                }
           
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public class LoginSuccessModel
        {
            public Boolean LoginSuccess { get; set; }
        }
    }
}
