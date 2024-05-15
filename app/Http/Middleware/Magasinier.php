<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Magasinier
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if( ! Auth::check() ){
            return redirect('/login');
        }
        $user = Auth::user();

        if( $user->usertype === 'magasinier' ) {
            return $next($request);
        }
        if( $user->usertype === 'chefservice' ) {
            return redirect('/chefservice/dashboard');
        }
        if( $user->usertype === 'chefdept' ) {
            return redirect('/chefdept/dashboard');
        }
        if( $user->usertype === 'admin' ) {
            return redirect('/admin/dashboard');
        }
        abort(403, 'Unauthorized action.');
    }
}
