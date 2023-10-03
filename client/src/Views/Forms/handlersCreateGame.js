
export const handleInputChange = (input, setInput, validate, setErrors, e) => {
    const updatedInput = {
        ...input,
        [e.target.name]: e.target.value
    };
    setInput(updatedInput);
    const updatedErrors = validate(updatedInput);
    setErrors(updatedErrors);
};



export const handlePlatforms = (platforms, setPlatforms, e) => {
    const platformValue = e.target.value;
    if (e.target.checked) {
        setPlatforms([...platforms, platformValue]);
    } else {
        setPlatforms(platforms.filter(platform => platform !== platformValue));
    }
};

export const handleGenres = (genres, setGenres, e) => {
    const genreValue = e.target.value;
    if (e.target.checked) {
        setGenres([...genres, genreValue]);
    } else {
        setGenres(genres.filter((genre) => genre !== genreValue));
    }
};

export const handleSubmit = (input, genres, platforms, errors, setErrors, dispatch, setInput, setGenres, setPlatforms, createGame) => {
    // Validar que al menos un género esté seleccionado
    if (genres.length === 0) {
        setErrors({ ...errors, genres: 'Select at least one' });
        return;
    } else {
        // Si se seleccionó al menos un género, elimina el mensaje de error
        setErrors({ ...errors, genres: '' });
    }
    // Validar que al menos una plataforma esté seleccionada
    if (platforms.length === 0) {
        setErrors({ ...errors, platforms: 'Select at least one' });
        return;
    } else {
        // Si se seleccionó al menos una plataforma, elimina el mensaje de error
        setErrors({ ...errors, platforms: '' });
    }

    // Resto del código para el envío del formulario y otras acciones
    dispatch(createGame(input));
    alert('Game created!');
    setInput({
        name: '',
        description: '',
        image: '',
    });
    setGenres([]);
    setPlatforms([]);
};
