const comentario = "Esse COVID é muito perigoso!";
const comentarioLowcase = comentario.toLowerCase()
if (comentarioLowcase.includes(`pandemia`) || comentarioLowcase.includes(`covid`)) {
    console.log('Comentário bloqueado por conter palavras proibidas')
}
