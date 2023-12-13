//using AzureComboBoxApi.DbContext;
using AzureComboBoxApi;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ComboboxicContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
	builder.AllowAnyOrigin()  // Allow requests from any origin
		.AllowAnyHeader()
		.AllowAnyMethod();
	// Do not use .AllowCredentials() when using AllowAnyOrigin()
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();