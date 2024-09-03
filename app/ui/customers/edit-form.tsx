'use client';
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
// import { updateInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import { updateUser, EditCustomerState } from '@/app/lib/actions';

export default function EditCustomerForm({
    customer
}:{
    customer: CustomerField
}){
    const initialState: EditCustomerState = { message: null, errors: {} };
    const { id, name} = customer
    const updateInvoiceWithId = updateUser.bind(null, id);
    const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
    return(
        <form action={formAction}>
       <input type="hidden" name="customerId" value={id} />
       <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            customer name
          </label>
          <div className="relative">
             <input
                id="name"
                name="name"
                required
                defaultValue={name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
    )
}