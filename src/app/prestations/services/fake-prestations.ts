import { Prestation } from 'src/app/shared/components/models/prestation';

export const FakePrestations: Prestation[] =
[new Prestation({
    id : '1',
    typePresta: 'coaching',
    client : 'Modis',
    nbJours: 20,
    tjmHt: 1200,
    comment: 'test comment 1'
  }),
  new Prestation({
    id : '2',
    typePresta: 'coaching2',
    client : 'Modis2',
    nbJours: 200,
    tjmHt: 1500,
    comment: 'test comment 1'
  })];

