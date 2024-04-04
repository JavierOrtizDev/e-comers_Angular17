import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterseptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => next(req).pipe(catchError(handelErrorResponse));

function handelErrorResponse(
  error: HttpErrorResponse
): ReturnType<typeof throwError> {
  const errorResponse = `Error cod: ${error.status}, message: ${error.message}`;
  return throwError(() => errorResponse);
}
