"use client"
import React, { useState } from "react";

export const DataFieldClient = ({ dataFields }: { dataFields: Record<string, string> }) => {
  const [showMore, setShowMore] = useState(false);
  return (<>
    <dl className="divide-y divide-gray-200 relative">
      {Object.entries(dataFields).map(([key, value], index) => (
        <div
          key={key}
          className={`py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${index % 2 === 0 ? 'bg-gray-50' : ''} ${!showMore && index >= 5 ? 'absolute -left-[99999px]' : ''}`}
        >
          <dt className="text-sm font-medium text-gray-500">{key}</dt>
          <dd className="mt-1 text-sm text-main-text sm:mt-0 sm:col-span-2">{value}</dd>
        </div>
      ))}
    </dl>
    {!showMore && (
      <div className="px-4 py-4 sm:px-6">
        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => setShowMore(true)}>
          Load More
        </button>
      </div>
    )}
  </>
  )
}


