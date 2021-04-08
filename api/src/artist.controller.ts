import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { GetArtistDto } from "./artist.controller.dto";
import { Artist } from "./artist.entity";
import { ArtistService } from "./artist.service";

@Controller('artists')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get(":id")
  async getArtist(@Param() { id }: GetArtistDto): Promise<Artist | undefined> {
    return this.artistService.getById(id);
  }

  @Post('search')
  async searchArtist(
    @Body() body: {name: string},
  ): Promise<Artist[] | undefined> {    
    return this.artistService.searchArtistByName(body.name);
  }

  @Get('')
  async allArtists(): Promise<Artist[] | undefined> {    
    return this.artistService.getArtists();
  }
}
