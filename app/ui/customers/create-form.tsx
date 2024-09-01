"use client";
import { useActionState } from 'react';
import Link from 'next/link';
import {
  UserCircleIcon,
  InboxIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCustomer, CustomerState } from '@/app/lib/actions';

const images = [{url: '/customers/male-image.png', label: 'male'},{url: '/customers/female-image.png', label: 'female'}]
export default function Form() {
  const initialState: CustomerState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createCustomer, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <InboxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
          </div>
        </div>

        {/* Image Dropdown */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Select an Image
          </label>
          <div className="relative">
            <select
              id="image"
              name="image"
              required
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="image-error"
            >
              <option value="" disabled>
                Select an image
              </option>
              {images.map((image) => (
                <option key={image.label} value={image.url}>
                  {image.label}
                </option>
              ))}
            </select>
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="image-error" aria-live="polite" aria-atomic="true">
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
