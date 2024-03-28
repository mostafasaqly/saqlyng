import {
  chain,
  externalSchematic,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';

export function sharedComponents(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree;
    return chain([
      
      externalSchematic('@schematics/angular', 'component', { 
        name: 'header',
        path: 'src/app/shared'
      }),
      externalSchematic('@schematics/angular', 'component', { 
        name: 'footer',
        path: 'src/app/shared'
      }),
    ]);
  };
}
export function landingPage(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree;
    return chain([
      
      ...['header', 'footer', 'section-one', 'section-two'].map(component =>
        externalSchematic('@schematics/angular', 'component', {
          name: component,
          path: `src/app/landing-page/components`,
          style: 'css',
        })
      ),
    ]);
  };
}