<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::name('settings.')->prefix('configuracoes')->middleware('auth')->group(function () {
    Route::get('/', function () {
        return redirect()->route('settings.profile.edit');
    })->name('index');

    Route::get('editar-perfil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('atualizar-perfil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('excluir-perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('editar-senha', [PasswordController::class, 'edit'])->name('password.edit');
    Route::put('atualizar-senha', [PasswordController::class, 'update'])->name('password.update');
});
