import { NextResponse } from 'next/server'

import axios from 'axios'

const AIRTABLE_API_KEY =
  'pat9RxLTubLn628rL.c4dc6feeec3a99abdc8cd996e884df1eb6e474b75e7777e552227098cd0a83d2'

export async function POST(request: Request) {
  const body = await request.json()

  const res = await axios.post(
    'https://api.airtable.com/v0/appDPPY0ly7ZgzTd2/Table%201',
    {
      records: [
        {
          fields: body,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  )

  return NextResponse.json(res.data)
}
