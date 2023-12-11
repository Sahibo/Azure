namespace AzureComboBoxApi.Models;

public class Product
{
    public int ProductId { get; set; }
    public string Name { get; set; }

    public int ProductCategoryId { get; set; }
    public ProductCategory Category { get; set; }
}