import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, fournisseur, marches, livraisons, bon_livraisons }) {
  const { data, setData, post, errors, reset } = useForm({
    name: fournisseur.name || "",
    coordonnees: fournisseur.coordonnees || "",
    num: fournisseur.num || "",
    email: fournisseur.email || "",
    marche: fournisseur.marche || "",
    bon_livraison: fournisseur.bon_livraison || "",
    livraison: fournisseur.livraison || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("fournisseur.update", fournisseur.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Modifier Fournisseur "{fournisseur.name}"
          </h2>
        </div>
      }
    >
      <Head title="Fournisseurs" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              
              <div>
                <InputLabel htmlFor="fournisseur_marches_id" value="Commande" />

                <SelectInput
                  name="marches_id"
                  id="fournisseur_marches_id"
                  value={data.marches_id}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("marches_id", e.target.value)}
                >
                  <option value="">Select Commande</option>
                  {marches.data.map((marche) => (
                    <option value={marche.id} key={marche.id}>
                      {marche.name}
                    </option>
                  ))}
                </SelectInput>

                <InputError message={errors.marche_id} className="mt-2" />
              </div>
             
              <div className="mt-4">
                <InputLabel htmlFor="fournisseur_name" value="Fournisseur Name" />

                <TextInput
                  id="fournisseur_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="fournisseur_coordonnees"
                  value="Task Description"
                />

                <TextAreaInput
                  id="fournisseur_coordonnees"
                  name="coordonnees"
                  value={data.coordonnees}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("coordonnees", e.target.value)}
                />

                <InputError message={errors.coordonnees} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="fournisseur_num" value="Numero" />

                <TextInput
                  id="fournisseur_num"
                  type="date"
                  name="num"
                  value={data.num}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("num", e.target.value)}
                />

                <InputError message={errors.num} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="fournisseur_email" value="Email" />

                <TextInput
                  id="fournisseur_email"
                  type="date"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div>
                <InputLabel htmlFor="fournisseurs_marches_id" value="Commande" />

                <SelectInput
                  name="marches_id"
                  id="fournisseurs_marches_id"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("marches_id", e.target.value)}
                >
                  <option value="">Select Commande</option>
                  {marches.data.map((marche) => (
                    <option value={marche.id} key={marche.id}>
                      {marche.name}
                    </option>
                  ))}
                </SelectInput>

                <InputError message={errors.marche_id} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="fournisseurs_livraison"
                  value="Livraison"
                />

                <SelectInput
                  name="livraison_id"
                  id="fournisseurs_livraison"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("livraison_id", e.target.value)}
                >
                  <option value="">Select Livraison</option>
                  {livraisons.data.map((livraison) => (
                    <option value={livraison.id} key={livraison.id}>
                      {livraison.article.name}
                    </option>
                  ))}
                </SelectInput>

                <InputError
                  message={errors.livraison_id}
                  className="mt-2"
                />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="fournisseurs_bon_livraison"
                  value="BonLivraison"
                />

                <SelectInput
                  name="bon_livraison_id"
                  id="fournisseurs_bon_livraison"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("bon_livraison_id", e.target.value)}
                >
                  <option value="">Select Bon de Livraison</option>
                  {bon_livraisons.data.map((bon_livraison) => (
                    <option value={bon_livraison.id} key={bon_livraison.id}>
                      {bon_livraison.bl}
                    </option>
                  ))}
                </SelectInput>

                <InputError
                  message={errors.bon_livraison_id}
                  className="mt-2"
                />
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={route("fournisseur.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}