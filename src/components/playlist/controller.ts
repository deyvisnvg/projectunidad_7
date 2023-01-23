import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";



// Instanciando  prisma
const prisma = new PrismaClient();




// Buscar por Id las playylist creadas 
export const findId =  async (req: Request, res: Response): Promise<void> => {
    try {

        const playlistId = Number(req.params.id);
        const playlist = await prisma.playlist.findFirst({

             where : {  id: playlistId },
                       include : { songs: true}
                    }
                  )
                  res.status(200).json({data:playlist});
                }catch (error) {
                    console.error(error)
                    res.status(500).json({ ok: false, message: "Falló la busqueda de la playlist"});
                  }
              }

// iniciando la creación de la playlist
export const createPlaylist = async (req: Request, res: Response): Promise<void> => {
  try {

        const { name, user_id } = req.body;
        const existingPlaylist = await prisma.playlist.findFirst({
            where: {
              name,
                user: { id: user_id }
              }
            });
      
            // Si la playlist ya existe, envía una respuesta de error
            if (existingPlaylist) {
            res.status(400).json({ message: "La playlist ya existe" });
          }
         else {
        //Creando la playlist
        const newPlaylist = await prisma.playlist.create({

            data: {
              name,
              user:{ connect: { id: user_id } }
            }
          }
        );
        res.status(201).json({ message: "Playlist creada exitosamente", data: newPlaylist });
      }
        }catch (error) {
        res.status(500).json({ message: "Falló al crear la playlist"});
        } finally { await prisma.$disconnect();}
      };
        
// Agregando cancion a la playlist
export const addSongToPlaylist = async (req: Request, res: Response): Promise<void> => {

  try {

        const { id_song, id_playlist } = req.body;

        //Busca la Cancion por e id y nombre si existe en la playlist 
        const existSongs = await prisma.playlist.findFirst({

            where : { id: id_playlist,
              songs : {
                 some : { id : id_song } } 
                }
              });
              if (existSongs) {
              res.status(400).json({ message: "La canción ya existe en la playlist"});
            }
            else{
            
          
            //Agregando la canción a la playlist
        const updatedPlaylist = await prisma.playlist.update({

        where: {id: id_playlist},
         data: {
          songs: { connect: [ { id: id_song } ] } 
        }
      }
    );
    res.status(200).json({ message: "Canción agregada a la playlist", data: updatedPlaylist });
  }
    }catch(error) {
    res.status(500).json({ message: "Falló al agregar la canción al playlist" })
  }
}
