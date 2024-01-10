using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TurboazApi.Controllers;

[ApiController]
[Route("Car")]

public class CarsController : ControllerBase
{
    private readonly MyturboazDatabaseContext _dbContext;
  
    public CarsController(MyturboazDatabaseContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpGet("")]
    public async Task<ActionResult<List<Car>>> GetCars()
    {
        var cars = await _dbContext.Cars.ToListAsync();

        return Ok(cars);
    }
    
    
}