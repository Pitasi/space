import { notFound } from "next/navigation";

type Getter<DataT, ParamsT> = (params: ParamsT) => Promise<DataT | null>;

export function WithGetter<DataT, ParamsT>(
  getter: Getter<DataT, ParamsT>,
  Comp: React.FC<{ data: DataT }>
) {
  return async ({ params }: { params: ParamsT }) => {
    const data = await getter(params);
    if (!data) {
      notFound();
    }
    return <Comp data={data} />;
  };
}
