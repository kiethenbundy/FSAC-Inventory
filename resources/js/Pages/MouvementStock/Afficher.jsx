import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
  MOUVEMENTSTOCK_STATUS_CLASS_MAP,
  MOUVEMENTSTOCK_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import ArticleTable from "../Article/TableArticle";
export default function Show({ auth, success, mouvementstock, articles, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`MouvementStock "${mouvementstock.name}"`}
          </h2>
          <Link
            href={route("mouvementstock.edit", mouvementstock.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>
      }
    >
      <Head title={`MouvementStock "${mouvementstock.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={mouvementstock.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">MouvementStock ID</label>
                    <p className="mt-1">{mouvementstock.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">MouvementStock Name</label>
                    <p className="mt-1">{mouvementstock.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">MouvementStock Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          MOUVEMENTSTOCK_STATUS_CLASS_MAP[mouvementstock.status]
                        }
                      >
                        {MOUVEMENTSTOCK_STATUS_TEXT_MAP[mouvementstock.status]}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Due Date</label>
                    <p className="mt-1">{mouvementstock.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Create Date</label>
                    <p className="mt-1">{mouvementstock.created_at}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">MouvementStock Description</label>
                <p className="mt-1">{mouvementstock.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <ArticleTable
                articles={articles}
                success={success}
                queryParams={queryParams}
                hideMouvementStockColumn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}