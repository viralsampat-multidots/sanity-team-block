// app/team/page.tsx
import { client } from '@/lib/sanity-client'
import { teamBlockQuery } from '@/lib/teamBlockQuery'
import { urlFor } from '@/lib/sanity-image'

interface TeamMember {
  _id: string
  name: string
  designation: string
  shortDescription: string
  image: any
  linkedin: string
}

const TeamPage = async () => {
  const teamMembers: TeamMember[] = await client.fetch(teamBlockQuery)

  if (!teamMembers || teamMembers.length === 0) {
    return <div className="text-center py-20">No team members found</div>
  }

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
              {member.image && (
                <img
                  src={urlFor(member.image).width(400).height(400).url()}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              )}

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
                    {/* Simple LinkedIn SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 inline-block mr-2"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.604c0-1.337-.026-3.063-1.865-3.063-1.865 0-2.149 1.454-2.149 2.958v5.709h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.036 0 3.598 2.001 3.598 4.601v5.594z" />
                    </svg>
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

export default TeamPage
