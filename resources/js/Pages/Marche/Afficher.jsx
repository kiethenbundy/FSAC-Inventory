import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";


export default function Afficher({ auth, marche }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Marche "${marche.name}"`}
          </h2>
          <Link
            href={route("marche.edit", marche.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Modifier
          </Link>
        </div>
      }
    >
      <Head title={`Marche "${marche.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
        
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>

                  <div>
                    <label className="font-bold text-lg">Commande ID</label>
                    <p className="mt-1">{marche.id}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Commande Reference</label>
                    <p className="mt-1">{marche.reference}</p>
                  </div>

                </div>

                <div>

                  <div>
                    <label className="font-bold text-lg">Titre</label>
                    <p className="mt-1">{marche.titre}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Status</label>
                    <p className="mt-1">{marche.status}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Num Lot</label>
                    <p className="mt-1">{marche.num_lot}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Quantite</label>
                    <p className="mt-1">{marche.quantite}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">mouvementstocks</label>
                    <p className="mt-1">
                      <Link
                        href={route("mouvementstock.show", marche.mouvementstock.id)}
                        className="hover:underline"
                      >
                        {marche.mouvementstock.name}
                      </Link>
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Articles</label>
                    <p className="mt-1">
                      <Link
                        href={route("article.show", marche.article.id)}
                        className="hover:underline"
                      >
                        {marche.article.name}
                      </Link>
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Destination</label>
                    <p className="mt-1">{marche.destination.nameD}</p>
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