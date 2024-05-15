import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, success, demande, articles, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Demande "${demande.name}"`}
          </h2>
          <Link
            href={route("demande.edit", demande.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Éditer
          </Link>
        </div>
      }
    >
      <Head title={`Demande "${demande.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-4 grid-cols-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">ID de la Demande</label>
                    <p>{demande.id}</p>
                  </div>
                  <div>
                    <label className="font-bold text-lg">Nom de la Demande</label>
                    <p>{demande.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Statut de la Demande</label>
                    <p>{demande.status}</p>
                  </div>
                  <div>
                    <label className="font-bold text-lg">Date de Création</label>
                    <p>{demande.created_at}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Description de la Demande</label>
                <p>{demande.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}