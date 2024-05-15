import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Row1 from './Row1';
import Row2 from './Row2';
import AuthenticatedLayoutMagasinier from '@/Layouts/AuthenticatedLayoutMagasinier';

export default function Dashboard( { auth, plusgrand, encours, livre, nonlivre, mesmouvementstocks} ) {
    return (
        <AuthenticatedLayoutMagasinier
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                   
                   <Row1 encours={encours} livre={livre} nonlivre={nonlivre} />

                </div>
            </div>
        </AuthenticatedLayoutMagasinier>

    );
}
