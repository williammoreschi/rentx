import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoute = Router();

specificationsRoute.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoute.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRoute };
