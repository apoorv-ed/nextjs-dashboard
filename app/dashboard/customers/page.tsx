import Search from "@/app/ui/search";
import CustomersTable from "@/app/ui/customers/table";
import Pagination from "@/app/ui/invoices/pagination";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { fetchFilteredCustomersPaginated,fetchFilteredCustomersPages } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    // const customers = await fetchFilteredCustomers(query);
    const totalPages = await fetchFilteredCustomersPages(query)
    const customers = await fetchFilteredCustomersPaginated(query, currentPage);
    return(
      <><div className="w-full">
        <CustomersTable {...{ customers }} />
      </div><div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div></>
    )
  }

  