import { Request, Response } from "express";

export class SpeciesController {
  //   constructor(private readonly service: ProductService) {}

  public getAll = async (req: Request, res: Response) => {
    res.json("species");
  };
}
