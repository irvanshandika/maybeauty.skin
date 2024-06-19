/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import ListTeam, { TeamMembers } from "@src/data/Team";
import { Card, Text, Group, Image } from "@mantine/core";

function main() {
  return (
    <>
      <div className="container px-6 py-[15vh] mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Team Digital Bisnis</h1>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ListTeam.map((member: TeamMembers) => (
            <Card key={member.nim} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={member.image} height={100} alt={member.nama} />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Nama: {member.nama}</Text>
              </Group>
              <Text size="sm" c="dimmed">
                NIM: {member.nim}
              </Text>
              <Text size="sm" c="dimmed">
                Kelas: {member.kelas}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default main;
