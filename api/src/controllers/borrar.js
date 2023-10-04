const getGameBuUId = async (id) => {
    try {
        const response = await Videogame.findByPk(id, {
            include: 
                {
                model: Genre,
                as: 'genres',
                attributes: ['id', 'name'],
                through: { // atravez de la tabla intermedia
                    attributes: []
                },
                order: [
                    ['ASC']
                ],
            },
        });
        if (!response)  
            throw Error(`The id: ${id} does not exist`);
            
            const filteredData = {
                id: response.id,
                name: response.name,
                description: response.description,
                platforms: response.platforms,
                released: response.released,
                rating: response.rating,
                image: response.image,
                genres: response.genres.map((genre) => genre.name),
            };
    
            return filteredData;
        } catch (error) {
            throw error;
        }
    }