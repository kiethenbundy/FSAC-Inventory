import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({
    auth,
    marche,
    mouvementstocks,
    articles,
    destinations,
}) {
    const { data, setData, post, errors, reset } = useForm({
        reference: marche.reference || "",
        titre: marche.titre || "",
        status: marche.status || "",
        num_lot: marche.num_lot || "",
        quantite: quantite.marche || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        
        post(route("marche.update", marche.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Modifier Commande "{marche.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Commandes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            <div>
                                <InputLabel
                                    htmlFor="marche_article_id"
                                    value="Article"
                                />

                                <SelectInput
                                    name="article_id"
                                    id="marche_article_id"
                                    value={data.article_id}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("article_id", e.target.value)
                                    }
                                >
                                    <option value="">Select Article</option>
                                    {articles.data.map((article) => (
                                        <option
                                            value={article.id}
                                            key={article.id}
                                        >
                                            {article.name}
                                        </option>
                                    ))}
                                </SelectInput>

                                <InputError
                                    message={errors.article_id}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="marche_reference"
                                    value="Commande reference"
                                />

                                <TextInput
                                    id="marche_reference"
                                    type="text"
                                    reference="reference"
                                    value={data.reference}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("reference", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.reference}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="marche_titre"
                                    value="Commande Titre"
                                />

                                <TextAreaInput
                                    id="marche_titre"
                                    name="titre"
                                    value={data.titre}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("titre", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.titre}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="marche_status"
                                    value="Status"
                                />

                                <SelectInput
                                    name="status"
                                    id="marche_status"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">Select Status</option>
                                    <option value="en_cours">En Cours</option>
                                    <option value="non_livre">Non Livre</option>
                                    <option value="livre">Livre</option>
                                </SelectInput>

                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="marche_num_lot"
                                    value="Num Lot"
                                />

                                <TextInput
                                    id="marche_num_lot"
                                    type="text"
                                    name="num_lot"
                                    value={data.num_lot}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("num_lot", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.num_lot}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="marches_mouvementstocks_id"
                                    value="Mouvement Stock"
                                />

                                <SelectInput
                                    name="marches_id"
                                    id="marches_mouvementstocks_id"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData(
                                            "mouvementstocks_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">
                                        Select Mouvement Stock
                                    </option>
                                    {mouvementstocks.data.map(
                                        (mouvementstock) => (
                                            <option
                                                value={mouvementstock.id}
                                                key={mouvementstock.id}
                                            >
                                                {mouvementstock.name}
                                            </option>
                                        )
                                    )}
                                </SelectInput>

                                <InputError
                                    message={errors.mouvementstock_id}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="marches_destination"
                                    value="Destination"
                                />

                                <SelectInput
                                    name="destination_id"
                                    id="marches_destination"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData(
                                            "destination_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Select Destination</option>
                                    {destinations.data.map((destination) => (
                                        <option
                                            value={destination.id}
                                            key={destination.id}
                                        >
                                            {destination.nameD}
                                        </option>
                                    ))}
                                </SelectInput>

                                <InputError
                                    message={errors.destination_id}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 text-right">
                                <Link
                                    href={route("marche.index")}
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
