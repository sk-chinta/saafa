import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Artist } from "./artist.entity";
import { ArtistRepository } from "./artist.repository";
import {Like} from "typeorm";

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(ArtistRepository) readonly repo: ArtistRepository
  ) {}

  async getById(id: number): Promise<Artist | undefined> {
    return this.repo.findOne(id, { relations: ["albums"] });  
  }

  async searchArtistByName(name: string): Promise<Artist[] | undefined> {    
    return this.repo.find({
      name: Like(`%${name}%`)
    });    
  }

  async getArtists(): Promise<Artist[] | undefined> {
    return this.repo.find({ relations: ["albums"] });
  }
}
