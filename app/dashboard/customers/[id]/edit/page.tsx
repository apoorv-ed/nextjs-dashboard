import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerByID } from '@/app/lib/data';
// import { notFound } from 'next/navigation';
import Form from '@/app/ui/customers/edit-form';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const customer = await fetchCustomerByID(id)
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}