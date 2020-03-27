import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

/** 
 * View - containers
 * Text - Qualquer tipo de texto
 * As tags não tem semantica 
 * Todos os elementos estão com display: flex
 * Propriedades CSS no estilo CamuelCase
 * Não existe herança de estilos. Estilização própria por elemento
*/