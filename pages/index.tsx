import React from 'react'
import { client } from '@/lib/sanity-client'
import { teamBlockQuery } from '@/lib/teamBlockQuery'
import type { Image } from 'sanity'

// Create interface for team members
export interface TeamMember {
  _id: string
  name: string
  designation: string
  shortDescription: string
  image: { asset: { url: string } }
  linkedin: string|null
}

interface Props {
  teamMembers: TeamMember[]
}

const TeamPage: React.FC<Props> = ({ teamMembers }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">Meet Our Team</h1>
        <p className="text-gray-500 text-center mb-12">
          Our team is dedicated to providing the best possible service to our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {
                member.image.asset.url && (
                  <img
                    src={member.image.asset.url}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                )
              }

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 mt-1">{member.designation}</p>
                <p className="text-gray-400 mt-3 text-sm">{member.shortDescription}</p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps = async () => {
  const teamMembers: TeamMember[] = await client.fetch<TeamMember[]>(teamBlockQuery)

  return {
    props: {
      teamMembers
    }
  }
}

export default TeamPage