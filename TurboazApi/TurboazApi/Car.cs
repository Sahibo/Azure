using System;
using System.Collections.Generic;

namespace TurboazApi;

public class Car
{
    public int Id { get; set; }

    public string Make { get; set; } = null!;

    public string Model { get; set; } = null!;

    public int Year { get; set; }

    public string Color { get; set; } = null!;

    public decimal Price { get; set; }

    public string Url { get; set; } = null!;
}
