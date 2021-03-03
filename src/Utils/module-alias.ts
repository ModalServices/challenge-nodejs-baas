import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname,'../..');

moduleAlias.addAliases({
    '@root': path.join(files),
    '@src': path.join(files, 'src'),
    '@test': path.join(files,'Test'),
    '@Controllers': path.join(files,'src','Controllers'),
    '@Entities': path.join(files,'src','Entities'),
    '@Utils': path.join(files,'src','Utils'),
    '@Usecases': path.join(files,'src','UseCases'),
  });

 