import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
  ARTICLE_PRIORITY_CLASS_MAP,
  ARTICLE_PRIORITY_TEXT_MAP,
  ARTICLE_STATUS_CLASS_MAP,
  ARTICLE_STATUS_TEXT_MAP,
} from "@/constants.jsx";
export default function Show({ auth, article }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Article "${article.name}"`}
          </h2>
          <Link
            href={route("article.edit", article.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>
      }
    >
      <Head title={`Article "${article.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={article.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">Article ID</label>
                    <p className="mt-1">{article.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Article Nom</label>
                    <p className="mt-1">{article.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Article Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          ARTICLE_STATUS_CLASS_MAP[article.status]
                        }
                      >
                        {ARTICLE_STATUS_TEXT_MAP[article.status]}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Article Prioriter</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          ARTICLE_PRIORITY_CLASS_MAP[article.priority]
                        }
                      >
                        {ARTICLE_PRIORITY_TEXT_MAP[article.priority]}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Due Date</label>
                    <p className="mt-1">{article.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Create Date</label>
                    <p className="mt-1">{article.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated By</label>
                    <p className="mt-1">{article.updatedBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">MouvementStock</label>
                    <p className="mt-1">
                      <Link
                        href={route("mouvementstock.show", article.mouvementstock.id)}
                        className="hover:underline"
                      >
                        {article.mouvementstock.name}
                      </Link>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Assigned Fournisseur</label>
                    <p className="mt-1">{article.assignedFournisseurs.name}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Article Description</label>
                <p className="mt-1">{article.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}