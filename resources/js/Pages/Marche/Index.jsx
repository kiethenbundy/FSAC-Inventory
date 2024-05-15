import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";;
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectInput from "@/Components/SelectInput";

export default function Index({ auth, marche, queryParams = null, success }) {
  queryParams = queryParams || {}; 

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("marche.index"), queryParams);
  };


const InputSuccess = ({ message }) => {
  useEffect(() => {
    if (message) {
        toast.success('Modifier avec succes', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }
}, [message]);

return <ToastContainer />;
};



  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("marche.index"), queryParams);
  };

  const deleteMarche = (marche) => {
    if (!window.confirm("Etes vous sur de vouloir supprimer ce marche?")) {
      return;
    }
    router.delete(route("marche.destroy", marche.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Commande
          </h2>
          <Link
            href={route("mouvementstock.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Ajouter
          </Link>
        </div>
      }
    >
      <Head title="Commande" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {success && (
            InputSuccess(success)
          )}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>
                      <TableHeading
                        name="reference"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Reference
                      </TableHeading>

                      <TableHeading
                        name="titre"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Titre
                      </TableHeading>

                      <TableHeading
                        name="num"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Numero
                      </TableHeading>

                      <TableHeading
                        name="quantite"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Quantite
                      </TableHeading>

                      <TableHeading
                        name="status"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Status
                      </TableHeading>

                      <th className="px-3 py-3 text-right">Actions</th>
                      
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.nom}
                          placeholder="reference Marche"
                          onBlur={(e) =>
                            searchFieldChanged("reference", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("reference", e)}
                        />
                      </th>

                      <th className="px-3 py-3">
                        <SelectInput
                          className="w-full"
                          defaultValue={queryParams.status}
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Select Status</option>
                          <option value="en_cours">En Cours</option>
                          <option value="non_livre">Non Livre</option>
                          <option value="livre">Livre</option>
                        </SelectInput>
                      </th>

                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {marche.data.map((marche) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={marche.id}
                      >
                        <td className="px-3 py-2">{marche.id}</td>
                        <th className="px-3 py-2 text-gray-100 text-nowrap hover:underline">
                          <Link href={route("marche.show", marche.id)}>
                            {marche.reference}
                          </Link>
                        </th>

                        <td className="px-3 py-2 text-nowrap">
                          {marche.titre}
                        </td>
                        
                        <td className="px-3 py-2 text-nowrap">
                          {marche.quantite}
                        </td>

                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded text-white " +
                              MARCHE_STATUS_CLASS_MAP[marche.status]
                            }
                          >
                            {MARCHE_STATUS_TEXT_MAP[marche.status]}
                          </span>
                        </td>
                       
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("marche.edit", marche.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={(e) => deleteMarche(marche)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={marche.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}