using AzureComboBoxApi.DbContext;
using AzureComboBoxApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AzureComboBoxApi.Controllers
{
    [ApiController]
    [Route("Product")]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("Categories")]
        public async Task<ActionResult<List<ProductCategory>>> GetCategories()
        {
            var categories = await _context.ProductCategories.ToListAsync();
            return Ok(categories);
        }

        [HttpGet("Category/{id}")]
        public async Task<ActionResult<List<Product>>> GetProductsByCategory(int id)
        {
            var products = await _context.Products
                .Where(p => p.ProductCategoryId == id)
                .ToListAsync();

            return Ok(products);
        }

        
    }
}