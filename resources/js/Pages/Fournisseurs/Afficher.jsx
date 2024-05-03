import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";


export default function Afficher({ auth, fournisseurs }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Fourniseur "${fournisseurs.name}"`}
          </h2>
          <Link
            href={route("fournisseurs.edit", fournisseurs.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Modifier
          </Link>
        </div>
      }
    >
      <Head title={`Fournisseur "${fournisseurs.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
        
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>

                  <div>
                    <label className="font-bold text-lg">Fournisseur ID</label>
                    <p className="mt-1">{fournisseurs.id}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Fournisseur Nom</label>
                    <p className="mt-1">{fournisseurs.name}</p>
                  </div>

                </div>

                <div>

                  <div>
                    <label className="font-bold text-lg">Coordonnees</label>
                    <p className="mt-1">{fournisseurs.coordonnees}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Numero</label>
                    <p className="mt-1">{fournisseurs.num}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Email</label>
                    <p className="mt-1">{fournisseurs.email}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Commande</label>
                    <p className="mt-1">
                      <Link
                        href={route("marche.show", fournisseurs.marche.id)}
                        className="hover:underline"
                      >
                        {fournisseurs.marche.reference}
                      </Link>
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Bon de Livraison</label>
                    <p className="mt-1">{fournisseurs.bon_livraison.bl}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}