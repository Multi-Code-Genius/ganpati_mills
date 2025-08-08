import { GraphQLClient, gql } from "graphql-request";

const endpoint =
  "https://ap-south-1.cdn.hygraph.com/content/cme188efh004408ut5x74dxsb/master";
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NTQ2NTM2NDEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtZTE4OGVmaDAwNDQwOHV0NXg3NGR4c2IvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJhZDM4NmZhNC1iMGViLTRkZDItOTNlMi0zZGQzMmFhZWVkYzkiLCJqdGkiOiJjbWUycmgyd2QwZG45MDdwbjlsN20zNGVwIn0.MvMnhpe266ZxX1BS_uFn__fjICa9xfC1WFyqEplfL5hh9JWAIM0uc-m-BwhSCctEf4ivRtl1JxvB3c5tX93x5rVuvQ7qKU1975lrU0FX2QdKaUye8azSMjxLGQ4BJHE1obhrCPJtSSfeysBfGQ6VIiolAdrOw4oorEtxLW4YHkuyXQmlaFEOhkIa5bBFt7N158HK9evlD2RTJi0tgcaov8lNx-qDUiN6B5CfxKAHgjdexWCXZXQTUxJ2Yd0J1hzblCFt2pvx8EzR_nSG8cs8SUM3r5mXquxRHNjXha_T60OgR8lO9nOkaq5CWJ-QtHXoeGbyC9SfawBEnb7_wTHTF55G7HyLyhfnhV5Mzv9KDH6GOfbQS4zEeOU3arpa9q0JiUNKtGRaYU7wrlY829WBC8NccerOaj8S4vMLNnxRk9uH2OWPUM8hVssHgAiwYJ-oTsnPWZexFkmJ0irpuegcJO6tPXNAB5O2rp2G98arlV3gJZiuESgz8bsmA_aBtf-daO6K17dS68VoAWREWELXijtrDEj8cjGPYk5APjKBdG7Fu3m6hRwpPPOpqSsr5uq-udUCN7_tCfEY3ySUKOGj0dr-5zzEmozrBxf5L3K3jvr_AM61z5BJ-tG6L38_LGUNp5e-x_Uqq-B6K9tJk0I78owHBwhhtdMf-hIYe5B8LmY";

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export async function getFabrics() {
  const query = gql`
    {
      fabrics {
        id
        name
        purchaseRate
        type
        percent
        reorderLevel
        description
        image {
          url
        }
      }
    }
  `;
  const data = await client.request(query);
  return data.fabrics;
}
